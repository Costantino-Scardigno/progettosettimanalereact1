import { CiGrid41 } from "react-icons/ci";
import { IoMdGrid } from "react-icons/io";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const ActionBanner = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <h2 className="mb-4">TV Shows</h2>
        <div className="btn-group" role="group">
          <div className="dropdown ms-4 mt-1">
            <Dropdown data-bs-theme="dark">
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="black"
                className="rounded-1 bg-black "
              >
                Generi
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Commedy</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Drama</Dropdown.Item>

                <Dropdown.Item href="#/action-4">Thirller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-beetween">
        <div>
          <CiGrid41 className="iconAction m-1" />
        </div>
        <div>
          <IoMdGrid className="iconAction m-1" />
        </div>
      </div>
    </div>
  );
};
export default ActionBanner;
