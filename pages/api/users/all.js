import React from 'react';

function all(req, res) {
    res.status(200).json({ 'users': [{ 'name': 'John' }, { 'name': 'Jane' }] })
}

export default all;