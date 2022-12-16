/* class CarritoService {
    URL_CARRITO = 'https://615d8b5212571a00172076ba.mockapi.io/carrito/'

    async guardarCarritoServicio(carrito) {
        const carritoGuardado = await http.post(this.URL_CARRITO, carrito)
        return carritoGuardado
    }

}

const carritoService = new CarritoService()
 */
class CarritoService {
    URL_CARRITO = 'https://637ac42b702b9830b9f2ee65.mockapi.io/carrito'; 

    async guardarCarritoServicio(carrito) {
        const carritoGuardado = await http.post(this.URL_CARRITO, carrito);
        return carritoGuardado
    }
}

const carritoService = new CarritoService(); 