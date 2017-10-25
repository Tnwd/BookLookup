function BookLookup(AmazonService){
  this.AmazonService = AmazonService

  this.echo = (isbn)=>{
    var book = this.AmazonService(isbn)
    return{

      title: book.title,
      image: book.image,
      isbn: '0000000000000'

    }
  }
}
test('isbn', () => {

const mockAmazonservice = jest.fn().mockReturnValue({

  title :'bookname :XOAutosport',
  image :'cover :www.xo-autosport.com/logo.jpg',
  isbn :'9780140285000'


})
  var app = new BookLookup(mockAmazonservice)
  var isbn = '9780140285000'
  var result = app.echo(isbn)


expect(mockAmazonservice).toHaveBeenCalled()
expect(mockAmazonservice).toHaveBeenCalledWith(isbn)
expect(result).toHaveProperty('title')
expect(result).toHaveProperty('image')
expect(result).toHaveProperty('isbn')
expect(result.title).toBe('bookname :XOAutosport')
expect(result.image).toBe('cover :www.xo-autosport.com/logo.jpg')
expect(result.isbn).toHaveLength(13)


})
