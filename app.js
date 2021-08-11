const notes = require('./notes.js')
const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')
const { type } = require('os')
const { demandOption } = require('yargs')
yargs.command({
    command: 'add',
    describe: 'Adding new note',
    builder: {
        title: {
            describe: 'title of note',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'body',
            type: 'string',
            demandOption: false
        }



    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }

})
yargs.command({
    command: 'remove',
    describe: 'Removing note',
    builder: {
        title: {
            describe: 'title of note',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)

    }
})

yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() {
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'print placeholder message for now',
    title: {
        describe: 'Read Note',
        type: 'string',
        demandOption: true
    },
    handler(argv) {
        notes.readNote(argv.title)
    }

})
yargs.parse()
