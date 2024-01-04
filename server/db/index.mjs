import mongoose from "mongoose";

mongoose.connect('mongodb+srv://savenkon:Sd16051978@cluster0.d5lsirx.mongodb.net/?retryWrites=true&w=majority')

export default mongoose.connection
