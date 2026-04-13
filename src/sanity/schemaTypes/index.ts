import { type SchemaTypeDefinition } from 'sanity'
import { workPackage } from './workPackage'
import { localeString } from './localeString'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [localeString, workPackage],
}
