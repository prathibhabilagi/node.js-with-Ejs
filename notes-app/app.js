const { argv } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        // console.log('Title: '+ argv.title);
        // console.log('Body: '+ argv.body);
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title (Remove)',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        //console.log('Removing a note', argv)
      notes.removeNotes(argv.title);
    }
})

yargs.command({
    command:'list',
    describe: 'List notes',
    handler(){
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder:{
        title:{
            describe: 'Read Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
})

yargs.parse();

