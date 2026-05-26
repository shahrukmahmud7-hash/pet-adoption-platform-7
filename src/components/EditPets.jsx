
import React from 'react';

const EditPets = () => {
  return (
    <div>
      
    </div>
  );
};

export default EditPets;


// "use client";

// import { useState } from "react";
// import {
//   Button,
//   FieldError,
//   Input,
//   Label,
//   ListBox,
//   Modal,
//   Select,
//   Surface,
//   TextArea,
//   TextField,
// } from "@heroui/react";
// import { Edit3 } from "lucide-react";

// export function EditPets({ pet }) {
//   const [open, setOpen] = useState(false);

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const updatedPet = Object.fromEntries(formData.entries());

//     console.log(updatedPet);

//     // Example API update
//     // await fetch(`https://pet-adoption-server-7.vercel.app/pet/${pet._id}`, {
//     //   method: "PUT",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify(updatedPet),
//     // });

//     setOpen(false);
//   };

//   return (
//     <>
//       {/* Trigger Button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="btn btn-sm bg-[#1e293b] hover:bg-[#334155] text-white border-none rounded-xl flex items-center gap-2 py-2 h-auto"
//       >
//         <Edit3 size={16} />
//         Edit
//       </button>

//       {/* Modal */}
//       <Modal isOpen={open} onOpenChange={setOpen}>
//         <Modal.Backdrop>
//           <Modal.Container placement="auto">
//             <Modal.Dialog className="sm:max-w-md">
//               <Modal.CloseTrigger />

//               <Modal.Header>
//                 <Modal.Heading>Edit Pet</Modal.Heading>
//               </Modal.Header>

//               <Modal.Body className="p-6">
//                 <Surface>
//                   <form onSubmit={onSubmit} className="space-y-4">

//                     {/* Pet Name */}
//                     <TextField name="petName" isRequired>
//                       <Label>Pet Name</Label>
//                       <Input defaultValue={pet?.petName} />
//                       <FieldError />
//                     </TextField>

//                     {/* Breed */}
//                     <TextField name="breed" isRequired>
//                       <Label>Breed</Label>
//                       <Input defaultValue={pet?.breed} />
//                     </TextField>

//                     {/* Age */}
//                     <TextField name="age" isRequired>
//                       <Label>Age</Label>
//                       <Input type="number" defaultValue={pet?.age} />
//                     </TextField>

//                     {/* Location */}
//                     <TextField name="location" isRequired>
//                       <Label>Location</Label>
//                       <Input defaultValue={pet?.location} />
//                     </TextField>

//                     {/* Image */}
//                     <TextField name="imageUrl" isRequired>
//                       <Label>Image URL</Label>
//                       <Input defaultValue={pet?.imageUrl} />
//                     </TextField>

//                     {/* Description */}
//                     <TextField name="description">
//                       <Label>Description</Label>
//                       <TextArea defaultValue={pet?.description} />
//                     </TextField>

//                     {/* Buttons */}
//                     <div className="flex gap-3 pt-2">
//                       <Button
//                         type="button"
//                         onPress={() => setOpen(false)}
//                         className="w-full bg-gray-200"
//                       >
//                         Cancel
//                       </Button>

//                       <Button type="submit" className="w-full bg-black text-white">
//                         Save
//                       </Button>
//                     </div>

//                   </form>
//                 </Surface>
//               </Modal.Body>
//             </Modal.Dialog>
//           </Modal.Container>
//         </Modal.Backdrop>
//       </Modal>
//     </>
//   );
// }