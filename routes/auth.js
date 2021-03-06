const express = require('express');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const user = require("../controllers/auth.controller")
const router = express.Router();
const passport = require('passport')

router.post('/join', isNotLoggedIn, user.postJoin);
// router.post('/join', user.postJoin);
router.post('/login', isNotLoggedIn, user.postLogin);
// router.post('/login', user.postLogin);
// router.post('/logout', isLoggedIn, user.getLogout);
router.get('/kakao', passport.authenticate('kakao'));
router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/login',
}), (req, res) => {
    res.redirect('/');
});
router.get('/google', passport.authenticate('google'));
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/login',
}), (req, res) => {
    res.redirect('/');
});
router.post('/withdrawal', user.deleteUser);

module.exports = router;