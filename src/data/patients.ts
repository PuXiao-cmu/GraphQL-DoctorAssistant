export interface Patient {
    id: string;
    name: string;
    contact?: string;
}
  
const patients: Patient[] = [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob", contact: "bob@abc.com" }
];
  
export default patients;
  