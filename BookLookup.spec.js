function isbn(AmazonService){
  this.AmazonService = AmazonService

  this.echo = (isbn,title,image)=>{
    var isbn = isbn(isbn,title,image)
    return{
      isbn: isn.isbn,
      title: isbn.title,
      image: isbn.image

    }
  }
}
test('isbn', (AmazonService) => {

const mockAmazonservice = jest.fn().mockAmazonservice({


  var isbn ='9780140285000'
  var title ='XOAutosport'
  var image ='www.xo-autosport.com/logo.jpg'


})
  var app = new isbn(mockAmazonservice)
  var isbn = '9780140285000'
  var result = app.echo(isbn,title,image)


expect(mockAmazonservice).toHaveBeenCalled(
expect(mockAmazonservice).toHaveBeenCalledWith(isbn)
expect(result).toHaveProperty('isbn')
expect(result).toHaveProperty('title')
expect(result).toHaveProperty('image')
expect(result.isbn).toBe('isbn: 9780140285000')
expect(result.title).toBe('title: XOAutosport')
expect(result.image).toBe('image: www.xo-autosport.com/logo.jpg')
})
