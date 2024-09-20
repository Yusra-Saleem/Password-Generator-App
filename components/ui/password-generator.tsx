"use client"; // Enables client-side rendering for this component

import { useState, ChangeEvent } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

// Default export of the GeneratePasswordComponent function
export default function GeneratePassword() {
  const [length, setLength] = useState<number>(16);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");

  const handleLengthChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLength(Number(e.target.value));
  };

  const generatePassword = (): void => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allChars = "";
    if (includeUppercase) allChars += uppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    if (allChars === "") {
      alert("Please select at least one character type.");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(password).then(
      () => {
        alert("Password copied to clipboard!");
      },
      () => {
        alert("Failed to copy password to clipboard."); // No err variable used
      }
    );
  };

  const handleCheckboxChange =
    (setter: (value: boolean) => void) =>
    (checked: boolean) => {
      setter(checked);
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 dark:bg-gray-900">
      <Card className="w-full max-w-md p-3 text-white bg-blue-300 shadow-lg rounded-lg">
        <div className="mx-auto bg-slate-900 p-6 max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl text-blue-200 font-bold">Password Generator</h1>
            <p className="text-gray-400 dark:text-gray-400">
              Create a secure password with just a few clicks.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="range">Password Length</label>
              <input
                type="range"
                id="range"
                min="8"
                max="32"
                value={length}
                onChange={handleLengthChange}
                className="w-full"
              />
              <p className="text-gray-400 dark:text-gray-400">
                Passwords should be at least 8 characters long.
              </p>
              <Input
                id="length"
                type="number"
                min="8"
                max="32"
                value={length}
                onChange={handleLengthChange}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label>Include:</Label>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="uppercase"
                  checked={includeUppercase}
                  onCheckedChange={handleCheckboxChange(setIncludeUppercase)}
                />
                <Label htmlFor="uppercase">Uppercase Letters</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="lowercase"
                  checked={includeLowercase}
                  onCheckedChange={handleCheckboxChange(setIncludeLowercase)}
                />
                <Label htmlFor="lowercase">Lowercase Letters</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="numbers"
                  checked={includeNumbers}
                  onCheckedChange={handleCheckboxChange(setIncludeNumbers)}
                />
                <Label htmlFor="numbers">Numbers</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="symbols"
                  checked={includeSymbols}
                  onCheckedChange={handleCheckboxChange(setIncludeSymbols)}
                />
                <Label htmlFor="symbols">Symbols</Label>
              </div>
            </div>
            <Button type="button" className="w-full bg-blue-300 rounded hover:bg-slate-600 text-slate-900 hover:text-blue-200" onClick={generatePassword}>
              Generate Password
            </Button>
            <div className="space-y-2">
              <Label htmlFor="password">Generated Password</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="password"
                  type="text"
                  value={password}
                  readOnly
                  className="flex-1 w-full mb-4"
                />
              </div>
              <p className="text-gray-400 text-center dark:text-gray-400">
                Password copy here!
              </p>
              <div className="flex justify-center items-center">
                <Button type="button" className="bg-blue-300 w-md rounded hover:bg-slate-600 text-slate-900 hover:text-blue-200" onClick={copyToClipboard}>
                  Copy to Clipboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
