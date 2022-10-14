import { Envelope, Lock } from "phosphor-react";
import reactLogo from "./assets/logo.svg";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import "./styles/global.css";

export const App: React.FC = () => {
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
      <form className="flex flex-col items-stretch gap-4 mt-10 w-full max-w-sm">
        <label htmlFor="email" className="font-semibold flex flex-col gap-2">
          <Text>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
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
              type="password"
              id="password"
              placeholder="********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit">Entar na plataforma</Button>

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
