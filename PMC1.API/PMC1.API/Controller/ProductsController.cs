using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PMC1.API.Data;
using PMC1.API.Models;

namespace PMC1.API.Controller
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly PMSDbContext _pmsDbcontext;

        public ProductsController(PMSDbContext pmsDbContext) { 
            this._pmsDbcontext = pmsDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllProducts()

        {
            var products = await _pmsDbcontext.Products.ToListAsync();
            return Ok(products);
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct([FromBody] Product product)
        {
            product.Id = Guid.NewGuid();

            await _pmsDbcontext.Products.AddAsync(product);
            await _pmsDbcontext.SaveChangesAsync();

            return Ok(product); 
        }
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetProduct(Guid id)
        {
            var product = await _pmsDbcontext.Products.FirstOrDefaultAsync(x => x.Id == id);

            if (product == null)
                return NotFound();

            return Ok(product);
        }
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] Guid id, Product updateProductRequest)
        {
            var product = await _pmsDbcontext.Products.FindAsync(id);

            if (product == null)
                return NotFound();

            product.Name = updateProductRequest.Name;
            product.Type = updateProductRequest.Type;
           
            product.Price = updateProductRequest.Price;


            await _pmsDbcontext.SaveChangesAsync();

            return Ok(product);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteProduct(Guid id)
        {
            var product = await _pmsDbcontext.Products.FindAsync(id);

            if (product == null)
                return NotFound();

            _pmsDbcontext.Products.Remove(product);
            await _pmsDbcontext.SaveChangesAsync();

            return Ok(product);
        }



    }
}
