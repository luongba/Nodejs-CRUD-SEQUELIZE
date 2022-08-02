const logFeature = (req, res, next) => {
    console.log("hello")
    next()
}

module.exports = {
    logFeature
}