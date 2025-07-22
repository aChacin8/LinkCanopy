import app from "./server";

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`Server is running in: http://localhost:${port}/`);
})