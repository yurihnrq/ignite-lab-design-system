import { FormEventHandler, useRef, useState } from "react";

import { Checkbox } from "../../components/Checkbox";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { TextInput } from "../../components/TextInput";
import { Text } from "../../components/Text";
import reactLogo from "../../assets/logo.svg";

export const SignIn: React.FC = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false);

  const handleSignIn: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setIsUserSignedIn(true);
  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <img src={reactLogo} alt="React Logo" className="w-32 h-32" />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar
        </Text>
      </header>
      <form
        onSubmit={handleSignIn}
        className="flex flex-col items-stretch gap-4 mt-10 w-full max-w-sm"
      >
        {isUserSignedIn ? (
          <Text>Login realizado.</Text>
        ) : null}

        <label htmlFor="email" className="font-semibold flex flex-col gap-2">
          <Text>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              data-testid="email-input"
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="font-semibold flex flex-col gap-2">
          <Text>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              data-testid="password-input"
              type="password"
              id="password"
              placeholder="********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" data-testid="remember-checkbox" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" data-testid="signin-button">
          Entar na plataforma
        </Button>

        <footer className="flex flex-col items-center gap-4 mt-8">
          <Text
            asChild
            size="sm"
            className="text-gray-400 underline hover:text-gray-200"
          >
            <a href="">Esqueceu sua senha?</a>
          </Text>
          <Text
            asChild
            size="sm"
            className="text-gray-400 underline hover:text-gray-200"
          >
            <a href="">Não possui conta? Cria uma agora!</a>
          </Text>
        </footer>
      </form>
    </div>
  );
};
