import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = () => {
  const handleSearch = () => {
    // Fonction de recherche à implémenter
    console.log("Recherche de:");
    // Vous pouvez implémenter ici la logique de recherche, par exemple en appelant une fonction de recherche de votre API
  };

  return (
    <div className="flex flex-col w-[30%]">
      {/* Filtrage */}
      <div className="mb-8">
        <select className=" w-1/3 p-2 ml-8 mt-36 border rounded-2xl">
          <option> Sort By</option>
          <option> Sandwitchs</option>
          <option> Pizza</option>
          <option> Burgeres</option>
        </select>
      </div>

      <div className="">
        <div className="  p-4 ml-4 rounded-lg shadow-xl  ">
          <h1 className="flex justify-center text-2xl  p-4 "> Search</h1>
          <div className="flex ">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full border-orange-400  rounded-l-3xl  ml-4  px-3 py-1 mb-4 bg-orange-400 bg-opacity-20"
              onChange={handleSearch()}

            />
            <button
              className="text-white px-3 py-1 rounded-r-3xl mb-4 mr-1"
              style={{ background: 'rgba(226, 112, 61, 1)' }}
            >
              <SearchIcon />
            </button>
          </div>
        </div>
        <div class="p-5 mt-6 ">
          {/* Ajoutez ici votre boîte de recherche */}
          <h2 className="text-lg font-semibold mb-4 ">Popular filtres</h2>
          {/* Ajoutez ici vos filtres populaires */}

          <ul class="flex flex-col space-y-4 ...">
            <li className="flex">
              <img src="/iconSandwich.png" alt="Sandwiches" className="mr-2 w-6 h-6" />
              <a href="#">Sandwiches</a>
            </li>
            <li className="flex">
              <img src="/iconburger.png" alt="Burgers" className="mr-2 w-6 h-6" />
              <a href="#">Burgers</a>
            </li>
            <li className="flex">
              <img src="/iconpizza.png" alt="Pizza" className="mr-2 w-6 h-6" />
              <a href="#">Pizza</a>
            </li>
          </ul>

          <h2 className="text-lg font-semibold mb-4">More filtres</h2>
          {/* Ajoutez ici votre image */}
          <ul class="flex flex-col space-y-4 ...">
            <li className="flex">
              <img src="/iconSandwich.png" alt="Sandwiches" className="mr-2 w-6 h-6" />
              <a href="#">Sandwiches</a>
            </li>
            <li className="flex">
              <img src="/iconburger.png" alt="Burgers" className="mr-2 w-6 h-6" />
              <a href="#">Burgers</a>
            </li>
            <li className="flex">
              <img src="/iconpizza.png" alt="Pizza" className="mr-2 w-6 h-6" />
              <a href="#">Pizza</a>
            </li>
            <li className="flex">
              <img src="/iconSandwich.png" alt="Sandwiches" className="mr-2 w-6 h-6" />
              <a href="#">Sandwiches</a>
            </li>
            <li className="flex">
              <img src="/iconburger.png" alt="Burgers" className="mr-2 w-6 h-6" />
              <a href="#">Burgers</a>
            </li>
            <li className="flex">
              <img src="/iconpizza.png" alt="Pizza" className="mr-2 w-6 h-6" />
              <a href="#">Pizza</a>
            </li>
            {/* Ajoutez plus de catégories si nécessaire */}
          </ul>

        </div>
        <img src="/10.png" alt="Image" className="mt-4 px-8" />

       
      </div>
    </div>


  );
}

export default Sidebar;
