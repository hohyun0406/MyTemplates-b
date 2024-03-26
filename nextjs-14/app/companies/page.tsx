`use client`;

interface IArticle {
  company: string;
  contact: string;
  country: string;
}

const Article = (props: IArticle) => {
  return (
    <>
      <tr>
        <td>{props.company}</td>
        <td>{props.contact}</td>
        <td>{props.country}</td>
      </tr>
    </>
  );
};

export default function Articles() {
  const articles = [
    {company: "Alfreds Futterkiste",contact: "Maria Anders",country: "Germany"},
    {company: "Centro comercial Moctezuma",contact: "Francisco Chang",country: "Mexico"},
    {company: "Ernst Handel", contact: "Roland Mendel", country: "Austria" },
    {company: "Island Trading", contact: "Helen Bennett", country: "UK" },
    {company: "Laughing Bacchus Winecellars",contact: "Yoshi Tannamuri",country: "Canada"},
    {company: "Magazzini Alimentari Riuniti",contact: "Giovanni Rovelli",country: "Italy"},
  ];

  const articleMap = articles.map((v, i) => (
    <Article key={i} company={v.company} contact={v.contact} country={v.country}
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
        <tbody>{articleMap}</tbody>
      </table>
    </>
  );
}
