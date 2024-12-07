import AmiiboList from "../components/AmiiboList";

/**
 * Mussie Abraham
 * @file AmiiboListPage.tsx
 * @description This file contains the AmiiboListPage component which serves as a page to display a list of Amiibo items.
 * The component uses Tailwind CSS for styling and includes a header and the AmiiboList component.
 */

function AmiiboListPage() {
  return (
    <div className="p-8">
      {/* Page header with custom font and color */}
      <h1 className="text-2xl font-bold mb-4 text-center" style={{ fontFamily: 'Comic Sans MS' }}>
        <span className="text-blue-500">Amiibo List</span>
      </h1>
      {/* AmiiboList component renders the list of Amiibo items */}
      <AmiiboList />
    </div>
  );
};

export default AmiiboListPage;