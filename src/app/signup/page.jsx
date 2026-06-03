"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SignUpPage() {

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const {data, error} = await authClient.signUp.email({name, image, email, password});
    console.log({data,error});

    if (error) {
      toast.error(error.message || 'Registration failed. Try again.');
    } else {
      toast.success('Account created successfully!');
      router.push('/signin');
    }
  };

  const handleGoogleSignUp = async () => {
    await authClient.signIn.social({
      provider: "google"
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
  <Card className="border w-full max-w-md py-8 px-4 sm:px-8">
    <h1 className="text-center text-2xl font-bold mb-4">Sign Up</h1>

    <Form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
      <TextField isRequired name="name" type="text">
        <Label>Name</Label>
        <Input placeholder="Enter your name" className="w-full" />
        <FieldError />
      </TextField>

      <TextField isRequired name="image" type="text">
        <Label>Image URL</Label>
        <Input placeholder="Image URL" className="w-full" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" className="w-full" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) return "Password must be at least 8 characters";
          if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
          if (!/[0-9]/.test(value)) return "Password must contain at least one number";
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" className="w-full" />
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>

      <div className="flex gap-2 w-full">
        <Button type="submit" className="flex-1">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary" className="flex-1">
          Reset
        </Button>
      </div>
    </Form>

    <p className="text-center text-sm text-muted-foreground mt-4">
      Already have an account?{" "}
      <Link href="/signin" className="underline underline-offset-4 hover:text-primary">
        Sign in
      </Link>
    </p>

    <div className="flex items-center gap-2 my-4">
      <hr className="flex-1 border-muted" />
      <span className="text-sm text-muted-foreground">OR</span>
      <hr className="flex-1 border-muted" />
    </div>

    <Button onClick={handleGoogleSignUp} variant="outline" className="w-full">
      Sign Up With Google
    </Button>
  </Card>
</div>
  );
}