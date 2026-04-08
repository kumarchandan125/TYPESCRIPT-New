try {

} catch (error) {
    if (error instanceof Error) { // Type guard to check if error is an instance of Error
        console.log(error.message)
    }
    console.log("An error occurred", error)

}

const data:unknown= "chai aur code"