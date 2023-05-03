import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import Post from './Post'
import Follow from './Follow'
import Comment from './Comment'
import Like from './Like'
import CommentLike from './CommentLike'
import CommentReply from './CommentReply'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string

  @column()
  public email:string

  @column()
  public username:string

  @column()
  public password:string

  @column()
  public rememberMeToken?: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @hasMany(() => Post)
  public posts: HasMany<typeof Post>


  @hasMany(() => Follow)
  public follows: HasMany<typeof Follow>

  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>

  @hasMany(() => Like)
  public likes: HasMany<typeof Like>

  @hasOne(() => Like)
  public like: HasOne<typeof Like>



  @hasMany(() => CommentLike)
  public commentlikes: HasMany<typeof CommentLike>


  @hasMany(() => CommentReply)
  public commentreplies: HasMany<typeof CommentReply>


  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
