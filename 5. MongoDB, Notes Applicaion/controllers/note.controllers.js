import Note from "../models/note.models.js"
import asyncHandler from "express-async-handler"


// @desc This method creates a connection to database
// @route POST /users
const createNote = asyncHandler(async (req, res)=>{
      
    try {
        const {title, content} = req.body;
        
        if(title && content){
            const newNote = new Note({
                title: title,
                content: content,
            })

            const createdNote = await newNote.save()

            res.json({
                code: 200,
                remark:'note created'
            })
        }else{
            res.status(400)
            res.json({
                code: 400,
                remark:"title or content missing"
            })
        }
        
    } catch (error) {
        console.log(error);
        res.status(500)
        res.json({
            code: 500,
            remark:"failed"
        })
    }
})

const getNotes = asyncHandler(async(req,res)=>{
    try {

        const filterObject = req.query.search ?{
            title:{
                $regex: req.query.search,
                $options: "i"
            }
        }: {};

        const notes = await Note.find(filterObject)

        res.json({
            code: 200,
            remark:'success',
            data: notes
        })
    } catch (error) {
        console.log(error);
        res.status(500)
        res.json({
            code: 500,
            remark:"failed"
        })
    }
})

const updateNote = asyncHandler(async(req, res)=>{
    try {
        
        const noteId = req.params.noteId;

        const note = await Note.findById(noteId)

        if(note){
            const {title, content, archivedToggle} = req.body;

            note.title = title || note.title; 
            note.content = content || note.content; 
            note.isArchived = archivedToggle || note.isArchived; 

            await note.save()

            res.json({
                code: 200,
                remarl:'note updated',
            })

        } else{
            console.log(error);
        res.status(404)
        res.json({
            code: 404,
            remark:"Note not found"
        })
        }

    } catch (error) {
        console.log(error);
        res.status(500)
        res.json({
            code: 500,
            remark:"failed"
        })
    }
})

export {createNote, getNotes, updateNote}