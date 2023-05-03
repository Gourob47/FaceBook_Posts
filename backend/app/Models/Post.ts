import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Comment from './Comment'
import Like from './Like'
import { ModelObject } from '@ioc:Adonis/Lucid/Orm'

export default class Post extends BaseModel {
  @column({ isPrimary: true, })
  public id: number

  @column()
  public content: string

  @column()
  public userId: number


  public serializeExtras = true



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>



  @hasMany(() => Comment,)
  public comments: HasMany<typeof Comment>

  

  @hasOne(() => Like)
  public likes: HasOne<typeof Like>






}
