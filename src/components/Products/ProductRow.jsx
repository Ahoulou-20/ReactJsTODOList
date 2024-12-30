/**
 * 
 * @param {name:string, stocked:boolean, price:string} poduct
 * @returns {JSX.Element}
 */


export default function ProductRow({product}){

    const style = product.stocked ? undefined : {color:'red'}
    return<tr>
        <td style={style}> {product.name}</td>
        <td> {product.price}</td>
    </tr>
}