# surf 🏄
A tiny node server to quickly serve JSON over HTTP.

### Usage
You can either run surf without any file specified, which means surf is listening to
requests and returns *any* file you request (if the file exists).
`surf -h 127.0.0.1 -p 3333`

#### Get any file in your cwd   
`curl 127.0.0.1:3333/data.json`   
`curl 127.0.0.1:3333/xyz.json`
   
If you specify a file, surf will *only* expose that one file, ignoring all other requests.   
`surf -h 127.0.0.1 -p 3333 data.json`
   
#### Get only your specified file   
`surf -h 127.0.0.1 -p 3333 data.json`   
   
✋ Won't work:   
`surf -h 127.0.0.1 -p 3333 xyz.json`

### License
MIT
