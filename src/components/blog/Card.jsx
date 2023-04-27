import React from 'react';
import './blog.css';
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';

export const Card = ({
  _id,
  title,
  summary,
  cover,
  createdAt,
  author,
  categories,
}) => {
  return (
    <>
      <section className="blog">
        <div className="container grid3">
          <div className="box boxItems">
            <div className="img">
              <Link to={`/posts/${_id}`}>
                <img src={'http://localhost:5000/' + cover} alt="code" />
              </Link>
            </div>
            <div className="details">
              <Link to={`/posts/${_id}`} className="link">
                <h3>{title}</h3>
              </Link>
              <div className="tag">
                <AiOutlineTags className="icon" />
                <a href="/">#{categories}</a>
              </div>

              <p>{author}</p>
              <p>{summary}</p>
              <div className="date">
                <AiOutlineClockCircle className="icon" />{' '}
                <time>{formatISO9075(new Date(createdAt))}</time>
                <AiOutlineComment className="icon" />{' '}
                <label htmlFor="">27</label>
                <AiOutlineShareAlt className="icon" />{' '}
                <label htmlFor="">SHARE</label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
