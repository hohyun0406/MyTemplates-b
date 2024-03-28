import CompanyColums from "@/app/organisms/columns/company-columns";
import CompanyRows from "@/app/organisms/rows/company-row";

`use client`;

export default function Companies() {

  const companyMap = CompanyRows().map((v) => (
    <CompanyColums {...v}
    />
  ));

  return (
    <>
      <h2>Html Table</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>{companyMap}</tbody>
      </table>
    </>
  );
}
