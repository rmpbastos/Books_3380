import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { title, author, description };

        axios.post('http://localhost:5000/books/add', newBook)
            .then(() => navigate('/'))
            .catch(err => console.error(err));
    };

    return (
        <div className='CreateBook'>
            <div className="container">
                <div className="row">

                    <div className="col-md-8 m-auto">
                        <br />
                        <a className="btn btn-info float-left" href="/">
                            Show Book List
                        </a>
                    </div>

                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Add Book</h1>
                        <p className="lead text-center">Create new book</p>

                        <form onSubmit={handleSubmit}>

                            <div className="form-group">
                                <input 
                                    className='form-control'
                                    type='text'
                                    placeholder='Title of the Book'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <br />

                            <div className="form-group" >
                                <input 
                                    className='form-control'
                                    type='text'
                                    placeholder='Author'
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                />
                            </div>

                            <br />

                            <div className="form-group">
                                <input 
                                    className='form-control'
                                    type='text'
                                    placeholder='Describe this book'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <input
                                type="submit"
                                value="Submit"
                                className="btn btn-info btn-block mt-4" 
                            />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddBook;