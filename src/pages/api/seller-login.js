import mongoose from 'mongoose';
import connectToDB from '../../lib/dbConnection';
import { default as User } from '../../models/seller-signup'

export default async function findUser (req, res) {
    
    const {username, password} = req.body

    let user = await User.findOne(
    {   
    username: username
    }
    );

    console.log(user);
    console.log(req.body);

    if(!user) {
        return res.json({status: 'user not found'})
    }
    
    if (password == user.password && username == user.username) {
        //customerLoggedIn = true
        //save username to local storage
        res.redirect('/sell-tickets')
        }  
}