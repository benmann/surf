# surf 🏄
A tiny node server to quickly serve JSON over HTTP.

### Usage
You can either run surf without any file specified, which means surf is listening to
requests and returns *any* file you request (if the file exists), or you specify a file to *only* expose that file.
By default surf will listen on 0.0.0.0:3333, so -h and -p can be omitted.

#### Get any file in your cwd   
`surf -h 127.0.0.1 -p 3333`   
Fetch:   
`curl 127.0.0.1:3333/data.json`   
`curl 127.0.0.1:3333/xyz.json`
    
     
#### Get only your specified file   
`surf -h 127.0.0.1 -p 3333 data.json`   

Fetch:   
`curl 127.0.0.1:3333/data.json` 
   
✋ Won't work:   
`curl 127.0.0.1:3333/xyz.json`

### License
MIT
