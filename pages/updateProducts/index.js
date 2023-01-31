import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery, useMutation } from "@apollo/client";

export default function updateProducts() {
    const [updateAllProductFields, { data, loading, error }] = useMutation(
        UpdateAllProductFieldsMutation
      );

    const handleUpdate = () => {
        updateAllProductFields();
      };

  return (
    <div>
      <button className="bg-blue-500 p-4" onClick={handleUpdate}>Update all products</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.products.map((product) => (
            <li key={product.title}>
              {product.title}: {product.metaFields.noNaturalRubber}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const UpdateAllProductFieldsMutation = gql`
  mutation UpdateAllProductFields {
    updateAllProductMetaFields(
      input: { metaFields: [{ key: "noNaturalRubber", value: true }] }
    ) {
      products {
        title
        metaFields {
          noNaturalRubber
        }
      }
    }
  }
`;

export async function getStaticProps(context) {
    return getNextStaticProps(context, {
      Page: updateProducts,
      revalidate: 1,
    });
  }