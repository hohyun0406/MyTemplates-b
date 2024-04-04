export default function CompanyColums(props: ICompany) {
    return (
          <>
            <tr key={props.id}>
              <td>{props.company}</td>
              <td>{props.contact}</td>
              <td>{props.country}</td>
            </tr>
          </>
        );
}