import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany, HasOne, hasOne, ModelObject } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Post from './Post'
import CommentLike from './CommentLike'
import CommentReply from './CommentReply'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId:number

  @column()
  public postId:number

  @column()
  public content:string


  public serializeExtras = true


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>

  @hasOne(() => CommentLike)
  public commentlikes: HasOne<typeof CommentLike>

  @hasMany(() => CommentReply)
  public commentreplies: HasMany<typeof CommentReply>



}
