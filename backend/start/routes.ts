/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import PetsController from 'App/Controllers/Http/PetsController'

/*Route.get('/', async ({ view }) => {
 // return {hello:'World'}
  return view.render('welcome')
})

/*
Route.get('/posts/:postId', async({params})=>{
  return `${params.postId} is hello World`
})*/

//Route.resource('/pets','PetsController').apiOnly()


//Route.get('/','HomeController.index')

//Route.on('/signup').render('Auth/signup').middleware('guest')
//Route.on('/login').render('Auth/login').middleware('guest');


// Route.on('/signup').redirectToPath('/login/getUser').middleware('guest');
// Route.on('/login').redirectToPath('/login/getUser').middleware('guest');


Route.post('/signup','AuthController.signup');
Route.post('/login','AuthController.login');
Route.post('/logout','AuthController.logout');

Route.get('/create','PostsController.create').middleware('auth');
Route.post('/create','PostsController.store').middleware('auth')

Route.get('/getPost','HomeController.index')
Route.get('/login/getUser','AuthController.getUser')

Route.post('/follow/:userid', 'FollowsController.store').middleware('auth')
Route.delete('/follow/:userid', 'FollowsController.destroy').middleware('auth')


Route.get('/getCommentLike','CommentLikesController.get')
Route.post('/commentlike/:userid/:postid/:commentid', 'CommentLikesController.store').middleware('auth');
Route.delete('/delcommentlike/:userid/:postid/:commentid', 'CommentLikesController.destroy')


Route.get('/post/comment','CommentsController.getComment')
Route.post('/post/comment/:postid/:userid', 'CommentsController.store').middleware('auth');
Route.post('/post/comment/edit/:commentid/:userid','CommentsController.edit').middleware('auth');
Route.delete('/post/comment/del/:commentid/:userid','CommentsController.destroy').middleware('auth');



Route.get('/commentreply', 'CommentRepliesController.getreply')
Route.post('/reply/:postid/:commentid', 'CommentRepliesController.create').middleware('auth');
Route.post('/replyedit/:commentreplyid/:userid', 'CommentRepliesController.edit').middleware('auth');
Route.delete('/replydelete/:commentreplyid/:userid', 'CommentRepliesController.destroy').middleware('auth');


Route.get('/commentreplylike','CrepliesController.get')
Route.post('/replylike/:creplyid/:userid/:postid/:commentid','CrepliesController.store').middleware('auth');
Route.delete('/delreplylike/:creplyid/:userid','CrepliesController.destroy');

Route.get('/edit','ProfilesController.profileEdit').middleware('auth')
Route.post('/editProfile','ProfilesController.editProfile').middleware('auth')


Route.get('/postedit/pe/:postid/:userid','PostEditsController.create').middleware('auth');
Route.post('/postedit/pe/:postid/:userid','PostEditsController.edit').middleware('auth');
Route.delete('/postedit/de/:userid/:postid','PostEditsController.destroy').middleware('auth');


Route.get('/postedit/li/all', 'LikesController.getLike')
Route.post('/postedit/li/:userid/:postid', 'LikesController.store').middleware('auth')
Route.delete('/postedit/unli/:userid/:postid', 'LikesController.destroy')



Route.get('/:username','ProfilesController.profileView').middleware('auth')



