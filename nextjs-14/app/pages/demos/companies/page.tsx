`use client`

import { NextPage } from "next";
import CompanyColums from "@/app/components/demos/company-columns";
import CompanyRows from "@/app/components/demos/company-row";

const CompaniesPage : NextPage = () =>{


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
        <tbody>{CompanyRows().map((v) => (
      <CompanyColums {...v}
      />
    ))}</tbody>
      </table>
    </>
  );

}

export default CompaniesPage;