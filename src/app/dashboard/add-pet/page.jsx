"use client";

import {
  Card,
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
} from "@heroui/react";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const AddPetPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const editId = searchParams.get("edit");


  useEffect(() => {
    if (editId) {
      fetch(`http://localhost:8000/pet/${editId}`)
        .then((res) => res.json())
        .then((data) => {
          Object.keys(data).forEach((key) => {
            const el = document.querySelector(`[name="${key}"]`);
            if (el) el.value = data[key];
          });
        });
    }
  }, [editId]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const pet = Object.fromEntries(formData.entries());

    let url = "http://localhost:8000/pet";
    let method = "POST";


    if (editId) {
      url = `http://localhost:8000/edit/${editId}`;
      method = "PATCH";
    }

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    });

    if (res.ok) {
      toast.success(editId ? "Pet updated successfully!" : "Pet added successfully!");
      router.push("/dashboard/my-listings");
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">

        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            {editId ? "Update Pet Details" : "Help a Paw Find Its Forever Home"}
          </h1>
          <p className="text-sm text-gray-500">
            Share pet details for adoption
          </p>
        </div>

        <Card className="shadow-md rounded-2xl bg-white">
          <form onSubmit={onSubmit} className="p-6 space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Pet Name */}
                  <TextField name="petName" isRequired>
                <Label>Pet Name</Label>
                <Input placeholder="Buddy" className="rounded-2xl" />
                <FieldError />
              </TextField>
                   
                    <div>
                <Select
                  name="species"
                  isRequired
                  className="w-full"
                  placeholder="Select species"
                >
                  <Label>Species</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Dog" textValue="Dog">
                        Dog
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cat" textValue="Cat">
                        Cat
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Bird" textValue="Bird">
                        Bird
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Rabbit" textValue="Rabbit">
                        Rabbit
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Guinea Pig" textValue="Guinea Pig">
                        Guinea Pig
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Hamster" textValue="Hamster">
                        Hamster
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Breed */}

                 <TextField name="breed" isRequired>
                <Label>Breed</Label>
                <Input placeholder="Golden Retriever" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Age */}
                 <TextField name="age" isRequired>
                <Label>Age</Label>
                <Input type="number" placeholder="2" className="rounded-2xl" />
                <FieldError />
              </TextField>


             <div>
                <Select
                  name="gender"
                  isRequired
                  className="w-full"
                  placeholder="Select gender"
                >
                  <Label>Gender</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Male" textValue="Male">
                        Male
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Female" textValue="Female">
                        Female
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Unknown" textValue="Unknown">
                        Unknown
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Adoption Fee */}
                <TextField name="adoptionFee" isRequired>
                <Label>Adoption Fee</Label>
                <Input type="number" placeholder="0" className="rounded-2xl" />
                <FieldError />
              </TextField>
      

              {/* Health Status */}
               <div>
                <Select
                  name="healthStatus"
                  isRequired
                  className="w-full"
                  placeholder="Select health status"
                >
                  <Label>Health Status</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Healthy" textValue="Healthy">
                        Healthy
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Minor Issues" textValue="Minor Issues">
                        Minor Issues
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Unknown" textValue="Unknown">
                        Unknown
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Critical" textValue="Critical">
                        Critical
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
            

              {/* Vaccination */}

              <div>
                <Select
                  name="vaccinationStatus"
                  isRequired
                  className="w-full"
                  placeholder="Select vaccination status"
                >
                  <Label>Vaccination Status</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Fully Vaccinated" textValue="Fully Vaccinated">
                        Fully Vaccinated
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Partially Vaccinated" textValue="Partially Vaccinated">
                        Partially Vaccinated
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Not Vaccinated" textValue="Not Vaccinated">
                        Not Vaccinated
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
              

              {/* Location */}
               <TextField name="location" isRequired>
                <Label>Location</Label>
                <Input type="text" placeholder="Enter location" className="rounded-2xl" />
                <FieldError />
              </TextField>
      

              {/* Owner Email */}
              <TextField name="ownerEmail" isReadOnly>
                <Label>Owner Email</Label>
                <Input value="user@example.com" readOnly />
              </TextField>

              {/* Image */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input type="url" className="rounded-xl h-10" />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea className="rounded-xl min-h-[90px]" />
                </TextField>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-3">

              <Button
                type="button"
                onClick={() => router.back()}
                className="w-full h-10 rounded-xl bg-gray-200 text-gray-700"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="w-full h-10 rounded-xl bg-gray-900 text-white"
              >
                {editId ? "Update Pet" : "Add Pet"}
              </Button>

            </div>

          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddPetPage; 