<?php

/*
 * This file is part of PHP CS Fixer.
 * (c) Fabien Potencier <fabien@symfony.com>
 *     Dariusz Rumiński <dariusz.ruminski@gmail.com>
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * @internal
 * @coversNothing
 */
final class RegisterApiTest extends TestCase
{
    use RefreshDatabase;

    public function testShould新しいユーザーを作成して返却する()
    {
        $data = [
            'name' => 'vuesplash user',
            'email' => 'dummy@email.com',
            'password' => 'test1234',
            'password_confirmation' => 'test1234',
        ];

        $response = $this->json('POST', route('register'), $data);

        $user = User::first();

        static::assertSame($data['name'], $user->name);

        $response
            ->assertStatus(201)
            ->assertJson(['name' => $user->name])
        ;
    }
}
