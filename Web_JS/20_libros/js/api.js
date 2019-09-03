const librosBase = 'https://www.googleapis.com/books/v1/volumes?' 
const aut_tit_40 = 'fields=items(volumeInfo(title,authors))&maxResults=20'
const in_title= '&q=intitle:'
export const LBGOOGLE = librosBase + aut_tit_40 + in_title