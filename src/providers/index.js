import { ConfraProvider } from "./confra";
import { GraduationProvider } from "./graduation";
import { ProductProvider } from "./product/index";
import { WeddingProvider } from "./wedding";

export const Providers = ({children}) => {

    return (
        <ProductProvider>
            <WeddingProvider>
                <ConfraProvider>
                    <GraduationProvider>
                        {children}
                    </GraduationProvider>
                </ConfraProvider>
            </WeddingProvider>
        </ProductProvider>)
}