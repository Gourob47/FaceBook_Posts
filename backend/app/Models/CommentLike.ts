import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User';
import Comment from './Comment';

export default class CommentLike extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column()
  public postId: number;

  @column()
  public commentId: number;

  @column()
  public userId: number;

  public serializeExtras = true


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Comment)
  public comment: BelongsTo<typeof Comment>
}
