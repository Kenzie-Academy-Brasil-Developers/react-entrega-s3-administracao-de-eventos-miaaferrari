import { ProductProvider } from "./product/index";

export const Providers = ({children}) => {

    return (
        <ProductProvider>
            {children}
        </ProductProvider>)
}