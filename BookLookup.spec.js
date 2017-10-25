function isbn(AmazonService){
  this.AmazonService = AmazonService

  this.echo = (isbn,title,image)=>{
    var isbn = isbn(isbn,title,image)
    return `isbn: ${isbn}`,`title: ${title}`,`image: ${image}`
  }
}








test('isbn', (AmazonService) => {
//Arrange
const mockAmazonservice = jest.fn()
var app = new isbn(mockAmazonservice)
//Act
var isbn ='9780140285000'
var title ='XOAutosport'
var image ='www.xo-autosport.com/logo.jpg'
var result = app.echo(isbn,title,image)
//Assert
expect(mockAmazonservice).toHaveBeenCalled(
expect(mockAmazonservice).toHaveBeenCalledWith(isbn,title,image)
expect(result).toBe('isbn: 9780140285000',
'title: XOAutosport',
'image: www.xo-autosport.com/logo.jpg')
)
})
