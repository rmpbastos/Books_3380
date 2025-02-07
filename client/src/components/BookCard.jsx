import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, onDelete }) => {

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/books/${book._id}`);
            onDelete(book._id);
        } catch (err) {
            console.error('Error deleting book', err);
        }
    };

    return (
        // <div className='list'>
        //     <div className="card-container">
        //         <img 
        //             src="https://images.unsplash.com/photo-1491841573634-28140fc7ced7" 
        //             alt="Books"
        //             height="200"
        //         />
        //         <div className='desc'>
        //             {/* <h2><a href="/show-book/123id">{book.title}</a></h2> */}
        //             <h2><a href={`/show-book/${book._id}`}>{book.title}</a></h2>
        //             <h3>{book.author}</h3>
        //             <p>{book.description}</p>
        //         </div>
        //         <button className='delete-btn' type='submit' onClick={handleDelete}>X</button>

        //     </div>

        // </div>


        // WITH AN EDIT BUTTON
        <div className="card-container" style={{ position: 'relative', paddingBottom: '50px' }}>
            <img 
                src="https://images.unsplash.com/photo-1491841573634-28140fc7ced7" 
                alt="Books"
                height="200"
            />
            <div className='desc'>
                <h2><Link to={`/show-book/${book._id}`}>{book.title}</Link></h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>
            <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px', // Align the buttons to the left
                right: '10px', // Ensure the buttons take the full width
                display: 'flex',
                justifyContent: 'space-between', // Spread the buttons apart
                alignItems: 'center'
            }}>
                <Link to={`/edit-book/${book._id}`} className="btn btn-primary btn-sm">Edit</Link>
                <button className='delete-btn btn btn-danger btn-sm' type='submit' onClick={handleDelete}>X</button>
            </div>
        </div>


    )
};

export default BookCard;

// https://images.unsplash.com/photo-1495446815901-a7297e633e8d

