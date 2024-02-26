module.exports = ({env}) => {

  if (env('NODE_ENV') === 'production'){
    return{
      upload: {
        provider: 'aws-s3'
      }
    }
  }
}
