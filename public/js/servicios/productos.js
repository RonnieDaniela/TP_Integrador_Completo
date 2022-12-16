/* class ProductoService {
    URL_PRODUCTOS = 'https://615d8b5212571a00172076ba.mockapi.io/productos/'

    async obtenerProductosService() {
        let productos = await http.get(this.URL_PRODUCTOS)
        return productos
    }

    async guardarProductoService(producto) {
        const productoGuardado = await http.post(this.URL_PRODUCTOS, producto)
        // console.log(productoGuardado)
        return productoGuardado
    }

    async actualizarProductoService(id, producto) {
        const productoActualizado = await http.put(this.URL_PRODUCTOS, id, producto)
        // console.log(productoActualizado)
        return productoActualizado
    }

    async borrarProductoService(id) {
        const productoBorrado = await http.del(this.URL_PRODUCTOS, id)
        // console.log(productoBorrado)
        return productoBorrado
    }
    
}

const productoService = new ProductoService()
 */

class ProductoService {
    URL_PRODUCTOS = 'https://637ac42b702b9830b9f2ee65.mockapi.io/producto';

    async obtenerProductosService() {
        let productos = await http.get(this.URL_PRODUCTOS);
        console.log(productos);
        return productos
    }
    
    async guardarProductosService(producto) {
        const productoGuardado = await http.post(this.URL_PRODUCTOS, producto);
        //console.log(productoGuardado)
        return productoGuardado
    }
    
    
    async actualizarProductosService(id, producto) {
        const productoActualizado = await http.put(this.URL_PRODUCTOS, id, producto);
        //console.log(productoActualizado)
        return productoActualizado
    
    }
    
    
    async borrarProductosService(id) {
        const productoBorrado = await http.del(this.URL_PRODUCTOS, id);
            //console.log(productoBorrado)
            return productoBorrado
    
    }
    
}

const productoService = new ProductoService()
