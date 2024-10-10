import type { SlugValue } from "sanity";

export function validateLink(value: string | undefined){
  return !(
    value && !value.startsWith('#') && !value.startsWith('/') && !value.startsWith('https://')
  ) || "Nieprawidłowy adres URL.";
}

export function validateRelativeLink(value: string | undefined){
  return value && (!value.startsWith("/") || value.startsWith('//')) ? 'Link musi być relatywny' : true;
}

export function validateSlug(slug: SlugValue | undefined){
  return !(
    slug?.current && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug.current)
  ) || "Slug może zawierać tylko małe litery, cyfry oraz łączniki. Upewnij się, że nie zawiera on znaków specjalnych ani wielkich liter.";
}