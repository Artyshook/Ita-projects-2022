/* Source : https://www.financevpraxi.cz/finance-vyber-financniho-produktu
 *"Mortgages and Inflation: How Do They Affect Each Other?" : https://www.ratehub.ca/blog/how-inflation-affects-mortgage/
 *If the annual inflation is 3%, it means that every year the mortgage amount loses from its total amount -3%
 *in this case we can  multiply the mortgage amount by: mortgage * (100 + (-0.3)) and calculate the value of money after inflation
 * if we need to convert annual inflation into monthly inflation we can use inflationMonthlyRate function below
 */

export const inflationMonthlyRate = (inflationInterest: number) => {
  return (1 + -(inflationInterest / 100)) ** (1 / 12) - 1
}
