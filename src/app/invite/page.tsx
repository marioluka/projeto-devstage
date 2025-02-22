import Image from 'next/image';
import logo from '../../assets/Logo.svg';
import { InviteLinkInput } from './invite-link-input';
import { Ranking } from './ranking';
import { Stats } from './stats';

export default function InvitePage() {
  const inviteLink = 'https://localhost:3000/invite/123456';

  return (
    <div className="min-h-dvh flex flex-col items-center justify-between gap-16 md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl text-gray-100 font-semibold font-heading leading-none">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesso o link enviado para o seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-xl text-gray-200 font-semibold font-heading leading-none">
              Indique e ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              incrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats />
        </div>
      </div>

      <Ranking />
    </div>
  );
}
