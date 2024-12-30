/**
 * 
 * @param {(name:string)=>JSX} ProductCategoryRow
 * @returns 
 */


export default function ProductCategoryRow({name}){
    return <tr>
        <td colSpan={2}><stong>{name}</stong></td>
    </tr>
}