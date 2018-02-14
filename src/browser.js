import toVdom from './reshape-ast-to-vdom'
import { decode } from './serialize'

export function hydrateInitialState(encoded, components) {
  return toVdom(components, decode(encoded))
}

export { encode, decode } from './serialize'
